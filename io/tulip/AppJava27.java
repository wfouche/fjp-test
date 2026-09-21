///usr/bin/env jbang "$0" "$@" ; exit $?
//SOURCES App.java ForkJoinPoolUser.java
//JAVA 27

package io.tulip;

import io.github.tulipltt.tulip.api.TulipApi;

public class AppJava27 {
   public static void main(String[] args) {
      TulipApi.runTulip("benchmark_config.json");
   }
}
