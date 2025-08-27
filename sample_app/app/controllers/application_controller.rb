class ApplicationController < ActionController::Base    
    def hello
        render html: "hello, tatsuya"
    end
end