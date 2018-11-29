
const getKudos = function(){

    $.get('/api/users')
    .then(function(data){
        $(".to").empty();
        $(".from").empty();

        const toList = $(".to");
        const fromList = $(".from");

        for (let i = 0; i < data.length; i++){
            toList.append(
                `<option value="${data[i]._id}">${data[i].name}</option>`
            );
            fromList.prepend(
                `<option value="${data[i]._id}">${data[i].name}</option>`
            )
        }
    })

    $.get('/api/kudos')
    .then(function(dataList){
        $(".kudos").empty();

        const display = $("#display");
      
        for (let i = 0; i < dataList.length; i++) {
            

            display.prepend(
                `<br><div class="card kudo-card" style="width: 400px; margin-left: 40%; margin-right: 40%">
                <div class="card-header">
                    <h3 class="card-title text-center">
                        <strong>${dataList[i].title}</strong>
                    </h3>
                </div>
                <div class="card-body">
                    <p class="card-text text-justify to" style='float: left'>
                        <b>To:</b> ${dataList[i].to.name}
                    </p>
                    <p class="card-text text-right from">
                        <b>From:</b> ${dataList[i].from.name}
                    </p><br>
                    <p class="card-text text-center">
                        ${dataList[i].body}
                    </p>
                </div>
            </div><br>`
            );
      
        //   for (let j = 0; j<dataList[i].kudos.length; j++){
              
            //   display.prepend(
            //       `<br><div class="card kudo-card" style="width: 400px; margin-left: 30%; margin-right: 30%">
            //       <div class="card-header">
            //           <h3 class="card-title text-center">
            //               <strong>${dataList[i].kudos[j].title}</strong>
            //           </h3>
            //       </div>
            //       <div class="card-body">
            //           <p class="card-text text-justify to" style='float: left'>
            //               <b>To:</b> ${dataList[i].name}
            //           </p>
            //           <p class="card-text text-right from">
            //               <b>From:</b> ${dataList[i].kudos[j].from}
            //           </p><br>
            //           <p class="card-text text-center">
            //               ${dataList[i].kudos[j].body}
            //           </p>
            //       </div>
            //   </div><br>`
            //   );
        //   }
      
        }
        
    })
}

getKudos();

const sendKudo = function(e) {
  e.preventDefault();

    kudoData = {
        to: $(".to :selected").val(),
        from: $(".from :selected").val(),
        title: $("#kudoTitle").val(),
        body: $("#kudoBody").val()
    }

    $.ajax({
        method: "POST",
        url: '/api/kudos',
        data: kudoData
    }).then(getKudos())
    
};

$(".submit").on("click", sendKudo);
