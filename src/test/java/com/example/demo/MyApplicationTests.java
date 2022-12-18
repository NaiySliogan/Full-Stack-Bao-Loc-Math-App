package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class MyApplicationTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void should_load_application() {

        // When
        ResponseEntity<String> actuatorHealthResponse = restTemplate.getForEntity("/actuator/health", String.class);

        // Then
        assertThat(actuatorHealthResponse.getBody()).startsWith("{\"status\":\"UP\"");
    }

}
