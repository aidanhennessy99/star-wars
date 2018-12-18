var fetch = function(planet) {
    var baseURI = "https://swapi.co/api/planets/";
    var apiURI = baseURI + planet;
    console.log(apiURI);

    $.ajax({
        //2. This defines the method, Data type and API Link that will be used in this project.
            method: "GET",
            dataType: "json",
            url: apiURI,
        //3. This displays the current planet info of the City you search, which gets removed when you search for weather info from a different City.
            success: function(data) {
              $('#name').empty().prepend(data.name);
              $('#climate').empty().append(data.climate);
              $('#population').empty().append(data.population);
              $('#terrain').empty().append(data.terrain);
              $('#diameter').empty().append(data.diameter);
              $('#surface_water').empty().append(data.surface_water);
        
            },
        //4. This is what returns when you type in something that is not a City name.
            error: function(jqXHR, textStatus, errorThrown) {
              alert("Invalid Name");
            }
          });
        };
        
        //5. This enables you to lookup and search for a City.
        $( document ).ready(function() {
            $('#search-button').on('click', function() {
              var planet = $('#search').val();
              fetch(planet);
              // var res = fetch data
            });
        });
        

