package com.example.demo.controller;

import com.example.demo.model.Result;
import com.example.demo.service.CrackService;
import com.example.demo.service.ResultService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/crack")
public class RestCrackController {

    private CrackService crackService;

    private ResultService resultService;
    public RestCrackController(CrackService crackService, ResultService resultService) {
        this.crackService = crackService;
        this.resultService = resultService;
    }

    @GetMapping()
    public ResponseEntity<Result> crack(){
         Result result = crackService.resolve();
         resultService.save(result);
         return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
