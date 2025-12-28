///usr/bin/env jbang "$0" "$@" ; exit $?
//SOURCES App.java ForkJoinPoolUser.java
//JAVA 26

package io.tulip;

import io.github.wfouche.tulip.api.TulipApi;

public class AppJava25 {
   public static void main(String[] args) {
      TulipApi.runTulip("benchmark_config.json");
   }
}
