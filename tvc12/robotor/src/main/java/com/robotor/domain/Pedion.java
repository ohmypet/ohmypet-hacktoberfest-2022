package com.robotor.domain;

import java.util.concurrent.ThreadLocalRandom;

public class Pedion extends Robot {
    private final int flexibility;

    public Pedion() {
        flexibility = ThreadLocalRandom.current().nextInt(1, 6);
    }

    public int getFlexibility() {
        return flexibility;
    }

    @Override
    public double getWeight() {
        return 20;
    }

    @Override
    public double getEnergyConsumption(double km) {
        return getWeight() * km + (getFlexibility() + 1) * km / 2;
    }

    @Override
    public String getExtraPropertiesAsString() {
        return String.format("Flexibility:: %s", getFlexibility());
    }
}
