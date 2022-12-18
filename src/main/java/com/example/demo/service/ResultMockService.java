package com.example.demo.service;

import com.example.demo.model.Result;
import com.example.demo.repository.ResultRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Profile("mock")
public class ResultMockService implements ResultService {

    private List<Result> results;
    private int idCourant;
    public ResultMockService() {
        results = new ArrayList<>();
        idCourant = 0;
    }

    public List<Result> findAll(){
        return results;
    }

    public Result save(Result result){
        if (results.contains(result)) {
            //Update
            results.remove(result);
        } else {
            // Insert
            result.setId(Long.valueOf(idCourant++));
        }
        results.add(result);
        return result;

    }

    @Override
    public void delete(Result result) {
        results.remove(result);

    }
}
