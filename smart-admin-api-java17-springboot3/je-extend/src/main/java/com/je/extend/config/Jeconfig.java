package com.je.extend.config;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.je.extend")
@ComponentScan("com.je.extend")
public class Jeconfig {

}
