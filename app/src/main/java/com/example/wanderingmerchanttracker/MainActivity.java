package com.example.wanderingmerchanttracker;

import androidx.appcompat.app.AppCompatActivity;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebChromeClient;
import android.widget.TextView;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    public static final String SHARED_PREFS = "sharedPrefs";
    public static final String TEXT = "text";
    private String text;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView webView = (WebView) findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("file:///android_asset/www/index.html");

        webView.addJavascriptInterface(this, "AndroidInterface");
        webView.loadUrl("javascript:saveItems()");
        webView.loadUrl("javascript:loadItems()");

    }

    @JavascriptInterface
    public void saveItemsJava(String value) {
        //Toast.makeText(this, value, Toast.LENGTH_SHORT).show();
        SharedPreferences sharedPreferences = getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();

        editor.putString(TEXT, value);
        editor.apply();
    }

    @JavascriptInterface
    public String loadItemsJava(){
        SharedPreferences sharedPreferences = getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        text = sharedPreferences.getString(TEXT, "DEFAULT");
        //Toast.makeText(this, text, Toast.LENGTH_SHORT).show();

        return text;
    }

}

