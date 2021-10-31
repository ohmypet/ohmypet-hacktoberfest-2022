package com.robotor.domain;

import java.util.concurrent.ThreadLocalRandom;

public class Carrier extends Robot {
    private final double energyWarehouse;

    public Carrier() {
        energyWarehouse = ThreadLocalRandom.current().nextDouble(50, 101);
    }

    @Override
    public double getWeight() {
        return 30;
    }

    public double getEnergyWarehouse() {
        return energyWarehouse;
    }

    @Override
    public double getEnergyConsumption(double km) {
        return getWeight() * km + 4 * energyWarehouse * km;
    }

    @Override
    public String getExtraPropertiesAsString() {
        return String.format("Energy Warehouse:: %s", getEnergyWarehouse());
    }
}
