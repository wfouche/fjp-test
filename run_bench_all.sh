#!/bin/bash

set_title() {
  echo -ne "\033]2;$1\007"
}

export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

rm -f -r app.log benchmark_report* benchmark_output.json benchmark_config.adoc benchmark_config.html

export JBANG_APP_JAVA_OPTIONS="-Djdk.virtualThreadScheduler.parallelism=4"

set_title "Java 21"
echo "n" | sdk install java 21.0.12-amzn
sdk use     java 21.0.9-tem

./run_bench_21.sh

set_title "Java 25"
echo "n" | sdk install java 25.0.4-tem
sdk use     java 25.0.4-tem

./run_bench_25.sh

set_title "Java 26"
echo "n" | sdk install java 26.0.2-amzn
sdk use     java 26.0.2-amzn

./run_bench_26.sh

set_title "Java 27"
echo "n" | sdk install java 27.0.0-amzn
sdk use     java 27.0.0-amzn

./run_bench_27.sh

rm -f -r app.log benchmark_report* benchmark_output.json benchmark_config.adoc benchmark_config.html
