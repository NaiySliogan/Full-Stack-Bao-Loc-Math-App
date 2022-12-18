package com.example.demo.controller;

import com.example.demo.model.Result;
import com.example.demo.service.ResultService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/results")
public class RestResultController {

    private ResultService resultService;

    public RestResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping()
    public ResponseEntity<List<Result>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(resultService.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Result> update(@PathVariable Long id, @RequestBody Result result){
        if (id.equals(result.getId())) {
            resultService.save(result);
            return ResponseEntity.status(HttpStatus.OK).body(result);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id, @RequestBody Result result){
        if (id.equals(result.getId())) {
            resultService.delete(result);
            return ResponseEntity.status(HttpStatus.OK).body(Boolean.TRUE);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Boolean.FALSE);
    }
}
