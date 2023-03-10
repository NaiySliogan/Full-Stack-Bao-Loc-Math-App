package com.example.demo.service;

import com.example.demo.model.Result;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.*;
import java.time.Instant;
import java.util.stream.Collectors;

@Service
@Profile("default")
public class CrackTableauService implements CrackService{
    @Override
    public Result resolve() {
        long lStartTime = Instant.now().toEpochMilli();

        List<Integer> tab = new LinkedList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));
        List<List<Integer>> list_permutation = permute(tab);
        List<List<Integer>> solutions = checkSolutions(list_permutation);

        long lEndTime = Instant.now().toEpochMilli();


        Random random = new Random();
        int indexSolution = random.nextInt(solutions.size());
        String solutionInString =  solutions.get(indexSolution).stream().map(i -> String.valueOf(i)).collect(Collectors.joining(""));

        Result result = new Result();
        result.setSolution(solutionInString);
        result.setDureeExecution(lEndTime - lStartTime);
        result.setDateEnregistrement(new Date());

        return result;
    }

    private List<List<Integer>> permute(List<Integer> list) {

        List<List<Integer>> result = new ArrayList<List<Integer>>();

        if (list.size() == 0) {
            result.add(new ArrayList<Integer>());
            return result;
        }

        Integer firstNumber = list.remove(0);

        List<List<Integer>> recursion = permute(list);
        for (List<Integer> listTemp : recursion) {

            for (int index = 0; index <= listTemp.size(); index++) {
                List<Integer> listPermute = new ArrayList<Integer>(listTemp);
                listPermute.add(index, firstNumber);
                result.add(listPermute);
            }

        }
        return result;
    }

    private List<List<Integer>> checkSolutions(List<List<Integer>> listTest) {
        List<List<Integer>> solutions = new ArrayList<List<Integer>>();
        for (List<Integer> integers : listTest) {
            if (equation(integers) == 66) {
                solutions.add(integers);
            }
        }
        return solutions;
    }

    private int equation(List<Integer> listeVariables) {
        int a = listeVariables.get(0);
        int b = listeVariables.get(1);
        int c = listeVariables.get(2);
        int d = listeVariables.get(3);
        int e = listeVariables.get(4);
        int f = listeVariables.get(5);
        int g = listeVariables.get(6);
        int h = listeVariables.get(7);
        int i = listeVariables.get(8);
        if (b % c == 0 && g * h % i == 0) {
            return a + (13 * b / c) + d + (12 * e) - f - 11 + (g * h / i) - 10;
        }
        else{
            return 0;
        }
    }
}
