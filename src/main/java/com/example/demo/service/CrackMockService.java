package com.example.demo.service;


import com.example.demo.model.Result;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@Profile("mock")
public class CrackMockService implements CrackService{
    @Override
    public Result resolve() {
        Result r = new Result();
        r.setSolution("123456789");
        r.setDateEnregistrement(new Date());
        r.setDureeExecution(2000L);
        return r;
    }
}
