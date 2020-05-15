package com.augiemarketplace.augiemarketplaceapi;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.io.IOException;
import java.io.InputStream;

@SpringBootApplication
@EnableSwagger2
public class AugiemarketplaceapiApplication {
	public static void main(String[] args) throws IOException {
		InputStream serviceAccount = new ClassPathResource("firebase.json").getInputStream();
		FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(serviceAccount))
					.setDatabaseUrl("https://augiemarketplace.firebaseio.com")
					.build();
			FirebaseApp.initializeApp(options);
			SpringApplication.run(AugiemarketplaceapiApplication.class, args);
	}
}
