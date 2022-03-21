library(rvest)
library(plyr)
library(RSelenium)
library(data.table)

content = read_html(x="https://lost-ark.maxroll.gg/resources/wandering-merchant-guide")

img_link = content %>% html_elements("figure") %>% html_element("img") %>% html_attr("src")
img_link = na.omit(img_link)


for(i in 1:length(img_link)){
	download.file(url=img_link[i], destfile=paste0("C:/Users/tobal/OneDrive/Github/WanderingMerchantTracker/app/src/main/assets/www/data/", gsub(pattern=".*wordpress/", replacement="", x=img_link[i])), mode="wb")
}

## Icons
icon_info = content %>% html_elements(".la-item") %>% html_text2()

###############

#
setwd(gsub(pattern='Documents', replacement='Google Drive/Github/NepotismCL/', x=getwd()))

#Set up driver
RunDriver=paste("java -Dwebdriver.chrome.driver=C:/Users/",Sys.info()["user"],"/Documents/chromedriver6.exe -jar C:/Users/",
	Sys.info()["user"],"/Documents/",
	list.files(path = paste("C:/Users/",Sys.info()["user"],"/Documents/", sep=""), 
		pattern = "selenium-server-standalone")
	," -port 4444", sep="")
writeLines(text=RunDriver, con=paste0("C:/Users/",Sys.info()["user"],"/Documents/RunSelenium.bat"))
shell.exec(file=paste0("C:/Users/",Sys.info()["user"],"/Documents/RunSelenium.bat"))

#Open page
remDr=remoteDriver(browserName = "chrome") #mozilla, chrome
remDr$open()

remDr$navigate(url="https://lost-ark.maxroll.gg/resources/wandering-merchant-guide")

element_icon = remDr$findElements(using="class name", value="lap-item-icon")
length(element_icon)
url_list = list()
for(i in 1:length(element_icon)){
	url_value = element_icon[[i]]$getElementAttribute(attrName="style")
	url_value = gsub(pattern=".*\\(|).*", replacement="", x=unlist(url_value))
	url_value = gsub(pattern="png*.", replacement="png", x=url_value)
	url_value = gsub(pattern=".*https", replacement="https", x=url_value)
	
	url_list = append(x=url_list, values=list(data.table("item" = icon_info[i], "url" = url_value)))
	
}
url_list = rbindlist(url_list)
url_list[3]

for(i in 1:nrow(url_list)){
	download.file(url=url_list[i]$url, destfile=paste0("C:/Users/tobal/OneDrive/Github/WanderingMerchantTracker/app/src/main/assets/www/data/icon/", url_list[i]$item, ".png"), mode="wb")
}
