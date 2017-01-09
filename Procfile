web: bundle exec puma -C config/puma.rb
resque: env TERM_CHILD=1 RESQUE_TERM_TIMEOUT=8 QUEUE=high,medium,low COUNT=2 bundle exec rake resque:workers
