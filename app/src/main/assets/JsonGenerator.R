library(lubridate)
library(data.table)
library(jsonlite)

temp = fread("C:/Users/tobal/Google Drive/Github/WanderingMerchantTracker/app/src/main/assets/www/data/DB.txt", sep="\t", header=TRUE, na.strings="")
writeClipboard(paste0("'", unique(temp$Regions), "'", collapse=", "))

timewindows = unique(temp$TimeWindowA)
json_conA = c()
for(i in 1:length(timewindows)){
	i_sel = temp[TimeWindowA == unique(temp$TimeWindowA)[i]]
	
	list_items = lapply(X=1:nrow(i_sel), FUN=function(x){
		selection_item = i_sel[x, paste0("I", 1:9)]
		selection_item = na.omit(unlist(selection_item))
		selection_item = gsub(pattern="'", replacement="", x=selection_item)
		selection_item = paste0("'", selection_item, "'", collapse=", ")
	})
	names(list_items) = i_sel$Vendor
	
	inner_dict = paste0("'",unique(i_sel$Regions), "':{'",unique(i_sel$Vendor),"':[",list_items,"]}", collapse=", ")
	test_json = paste0("'",unique(temp$TimeWindowA)[i],"':{", inner_dict,"}", collapse=", ")
	json_conA[i] = test_json
}

timewindows = unique(temp$TimeWindowB)
json_conB = c()
for(i in 1:length(timewindows)){
	i_sel = temp[TimeWindowB == unique(temp$TimeWindowB)[i]]
	
	list_items = lapply(X=1:nrow(i_sel), FUN=function(x){
		selection_item = i_sel[x, paste0("I", 1:9)]
		selection_item = na.omit(unlist(selection_item))
		selection_item = gsub(pattern="'", replacement="", x=selection_item)
		selection_item = paste0("'", selection_item, "'", collapse=", ")
	})
	names(list_items) = i_sel$Vendor

	inner_dict = paste0("'",unique(i_sel$Regions), "':{'",unique(i_sel$Vendor),"':[",list_items,"]}", collapse=", ")
	test_json = paste0("'",unique(temp$TimeWindowB)[i],"':{", inner_dict,"}", collapse=", ")
	json_conB[i] = test_json
}

json_res = paste0("{",paste0(json_conA, collapse=", "),",", paste0(json_conB, collapse=", "),"}")
writeClipboard(str=json_res)
