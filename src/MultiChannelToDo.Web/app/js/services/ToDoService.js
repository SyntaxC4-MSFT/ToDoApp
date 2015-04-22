﻿'use strict';
var apiPath = "http://mobilehol-code.azurewebsites.net/tables";
multiChannelToDoApp
    .factory('toDoService', ['$http', function ($http) {
        return {

            getItems: function () {
                return $http.get(apiPath + '/TodoItem');
            },

            add: function (id, task) {
                return $http.post(apiPath + '/TodoItem', { "id": id, "text": task, "complete": false });
            },

            complete: function (item) {
                return $http.put(apiPath + '/ToDoItem/' + item.Id, { "id": item.id, "text": item.text, "complete": true });
            }
        }
    }]);