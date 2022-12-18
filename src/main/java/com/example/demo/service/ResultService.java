package com.example.demo.service;

import com.example.demo.model.Result;

import java.util.List;

public interface ResultService {

    List<Result> findAll();

    Result save(Result result);

    void delete(Result result);
}
