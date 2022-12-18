package com.example.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "resultat")
public class Result implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    private String solution;
    private Date dateEnregistrement;

    private Long dureeExecution;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public Date getDateEnregistrement() {
        return dateEnregistrement;
    }

    public void setDateEnregistrement(Date dateEnregistrement) {
        this.dateEnregistrement = dateEnregistrement;
    }

    public Long getDureeExecution() {
        return dureeExecution;
    }

    public void setDureeExecution(Long dureeExecution) {
        this.dureeExecution = dureeExecution;
    }

}
