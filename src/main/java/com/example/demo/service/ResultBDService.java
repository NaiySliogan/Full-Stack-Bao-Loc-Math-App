package com.example.demo.service;

import com.example.demo.model.Result;
import com.example.demo.repository.ResultRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@Profile("default")
public class ResultBDService implements ResultService {

    private final ResultRepository resultRepository;

    public ResultBDService(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    public List<Result> findAll(){
        return resultRepository.findAll();
    }

    public Result save(Result result){
        // Verifie que l'objet Result est cohérent
        // Doit vérifier que l'objet n'a pas été mis à jour par quelqu'un d'autre


        result.setDateEnregistrement(new Date());
        return resultRepository.save(result);
    }

    @Override
    public void delete(Result result) {
        resultRepository.deleteById(result.getId());
    }
}
