package com.robotor.domain;

public abstract class Robot {
    public abstract double getWeight();

    public abstract double getEnergyConsumption(double km);

    public abstract String getExtraPropertiesAsString();

    public String getRobotType() {
        return getClass().getSimpleName();
    }

    public void printInformation() {
        String type = getRobotType();
        System.out.printf("Robot type:: %s%n", type);

        double weight = getWeight();
        System.out.printf("Weight:: %s%n", weight);

        String extraPropertiesAsString = getExtraPropertiesAsString();
        System.out.printf("%s%n", extraPropertiesAsString);
    }
}
