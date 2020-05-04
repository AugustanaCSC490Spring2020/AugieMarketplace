package com.augiemarketplace.augiemarketplaceapi;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.io.FileInputStream;

@EnableSwagger2
@SpringBootApplication
public class AugiemarketplaceapiApplication {

	public static void main(String[] args) {
		try {
			FileInputStream serviceAccount =
					new FileInputStream("firebase.json");

			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(serviceAccount))
					.setDatabaseUrl("https://augiemarketplace.firebaseio.com")
					.build();

			FirebaseApp.initializeApp(options);
		} catch (Exception e) {
			e.printStackTrace();
		}
		SpringApplication.run(AugiemarketplaceapiApplication.class, args);
	}
}
