package com.robotor;

import com.robotor.domain.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Application {
    public static void main(String[] args) {
        List<Class> robotTypes = getRobotTypes();
        GroupRobot groupRobot = setupRobot(robotTypes);
        groupRobot.go(10)
                .printStatus()
                .printEnergyConsumptionHighest()
                .printTotalEnergyConsumption();
    }

    private static List<Class> getRobotTypes() {
        List<Class> robotTypes = new ArrayList<>();
        robotTypes.add(Carrier.class);
        robotTypes.add(Zattacker.class);
        robotTypes.add(Pedion.class);
        return robotTypes;
    }

    private static GroupRobot setupRobot(List<Class> robotTypes) {
        RobotFactory robotFactory = initRobotFactory();
        Scanner keyboard = new Scanner(System.in);

        robotTypes.forEach(clazz -> {
            System.out.printf("Type quality for %s: ", clazz.getSimpleName());
            int quality = keyboard.nextInt();
            try {
                robotFactory.add(clazz, quality);
            } catch (Exception exception) {
                exception.printStackTrace();
            }
        });
        keyboard.close();
        return robotFactory.build();
    }

    private static RobotFactory initRobotFactory() {
        return RobotFactory.builder()
                .addEngine(Carrier.class, new CarrierBuilderEngine())
                .addEngine(Zattacker.class, new ZattackerBuilderEngine())
                .addEngine(Pedion.class, new PedionBuilderEngine())
                .build();
    }
}
