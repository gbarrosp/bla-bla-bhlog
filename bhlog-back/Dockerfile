#FROM openjdk:8-jdk-alpine AS build  
FROM maven:3.6.3-jdk-8 AS build

WORKDIR /usr/src/app
RUN mkdir -p /app/data/log

COPY pom.xml ./pom.xml
RUN mvn dependency:go-offline -B

COPY src ./src
RUN mvn -Dmaven.test.skip=true package 

FROM openjdk:8-jre-alpine

COPY --from=build /usr/src/app/target/bhlog-back-*.jar /usr/app/bhlog-back.jar
EXPOSE 80

ENTRYPOINT ["java","-Dspring.config.use-legacy-processing=true","-Dspring.profiles.active=docker","-jar","/usr/app/bhlog-back.jar"]