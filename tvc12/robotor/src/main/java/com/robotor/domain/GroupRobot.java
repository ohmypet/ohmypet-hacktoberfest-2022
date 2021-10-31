package com.robotor.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

public class GroupRobot {
    private double distance = 0;
    private final List<Robot> robots;

    public GroupRobot(List<Robot> robots) {
        this.robots = robots;
    }

    public GroupRobot go(double distance) {
        this.distance += distance;
        return this;
    }

    public GroupRobot printStatus() {
        robots.forEach(robot -> {
            robot.printInformation();
            System.out.printf("Energy Consumption:: %s%n%n", robot.getEnergyConsumption(distance));
        });
        return this;
    }

    public GroupRobot printEnergyConsumptionHighest() {
        Map<String, List<Robot>> groupRobots = robots.stream().collect(Collectors.groupingBy(Robot::getRobotType));
        List<Map.Entry<String, Double>> robotEnergyConsumptionList = new ArrayList<>();
        groupRobots.forEach((clazzAsString, robots) -> {
            double sum = robots.stream().mapToDouble(robot -> robot.getEnergyConsumption(distance)).sum();
            robotEnergyConsumptionList.add(Map.entry(clazzAsString, sum));
        });
        Optional<Map.Entry<String, Double>> robot = robotEnergyConsumptionList.stream().max((value1, value2) -> value1.getValue() > value2.getValue() ? 1 : 0);
        robot.ifPresent(stringDoubleEntry -> System.out.printf("Robot Type Energy Consumption Highest:: %s%n", stringDoubleEntry.getKey()));
        return this;
    }

    public void printTotalEnergyConsumption() {
        double totalEnergyConsumption = robots.stream().mapToDouble(robot -> robot.getEnergyConsumption(distance)).sum();
        System.out.printf("Total Energy Consumption:: %s%n", totalEnergyConsumption);
    }
}
