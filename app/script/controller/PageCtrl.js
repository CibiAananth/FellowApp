/**
 * Created by Cibi on 7/19/2017.
 
/*angularjs module and controller*/
var app=angular.module("myapp",[]);
app.controller("pageCtrl",function ($scope,$http){
    $http.get("https://jsonblob.com/b16baa58-6c0c-11e7-a38a-6fa6420982d9").then(function (response) {
        $scope.myData= response.data.records;
    });

/*static json data*/	

    var jsl= "{'name': 'Joe', 'age': 36,'location':'bangalore','url':'https://www.bit.ly/2322k','mob':232323},{'name': 'Cibi', 'age': 37,'location':'chennai','url':'https://www.bit.ly/542tr','mob':989898}";
      $scope.data = eval('([' + jsl+ '])');
	
/*To verify the user by getting mobile number*/	  

$scope.loginname="Welcome";

$scope.verifymobile=function (number) {
	var count=0;
    for(var i=0;i<=$scope.data.length;i++){
    if(number==$scope.data[i].mob){
		$scope.loginname=$scope.data[i].name;
		swal("Hello","Welcome Mr."+$scope.loginname,"success");
    }else{

    }
    $scope.mobile="";
}};

/*function to display name,time of the recruiter and switch to the particular recruiter when the chat is clicked*/

$scope.chatdetails=[{name:"Cibi",img:"https://lh6.googleusercontent.com/-y-MY2satK-E/AAAAAAAAAAI/AAAAAAAAAJU/ER_hFddBheQ/photo.jpg",time:"6:48:27 AM",filtertime:3,
msg:"",msgtime:""}
,{name:"Aananth",img:"https://lh3.googleusercontent.com/-p0CqPukO84c/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXyAtWtNtEPeCABE8YCsETv7kZjFOg/s32-c-mo-md/photo.jpg",time:"6:38:22 AM",filtertime:2,
        msg:"",msgtime:""}
,{name:"Cibiaananth",img:"https://lh3.googleusercontent.com/-lXxZz-5O8g8/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXz9XqqCA8BMpPXAFMP3cWEp1X7tLA/s32-c-mo-md/photo.jpg",time:"6:28:17 AM",filtertime:1,
        msg:"",msgtime:""}];


    $scope.chatimg="https://lh3.googleusercontent.com/-lXxZz-5O8g8/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXz9XqqCA8BMpPXAFMP3cWEp1X7tLA/s32-c-mo-md/photo.jpg";
    $scope.chatuser=$scope.loginname;

    $scope.messagename=function(username) {

    $scope.chatuser=username;
    for(var i=0;i<=$scope.chatdetails.length;i++){
        if(username==$scope.chatdetails[i].name) {
            $scope.chatimg = $scope.chatdetails[i].img;
            $scope.newtime=new Date();
            $scope.chatdetails[i].time=$scope.newtime.toLocaleTimeString();
            $scope.chatdetails[i].msg=$scope.conversation[i].msg;
            $scope.chatdetails[i].msgtime=$scope.conversation[i].msgtime;
            $scope.timecal($scope.newtime,i);
        }
    }};
    $scope.timecal=function(time,i){
        var sec=time.getSeconds();
        var min=time.getMinutes();
        var hour=time.getHours();
		$scope.chatdetails[i].filtertime=hour*60*60+min*60+sec;
		console.log($scope.chatdetails[i].filtertime);
		console.log($scope.chatdetails[i].name);
    };
/*function to display the conversation*/

    $scope.conversation=[
        {msg:"hai",img:'https://lh3.googleusercontent.com/-ymFl126sbqE/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXzHObbON2pQ1lh65mFggGLwXeUiYg/s64-c-mo-md/photo.jpg',msgtime:"09:45PM"},
    
        ];

    $scope.msgsend=function () {
        $scope.msgtym=new Date();
        var text={
            msg:$scope.messag,
            msgtime:$scope.msgtym.toLocaleTimeString(),
			img:"https://lh3.googleusercontent.com/-ymFl126sbqE/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXzHObbON2pQ1lh65mFggGLwXeUiYg/s64-c-mo-md/photo.jpg;"
        };
        $scope.conversation.push(text);
        $scope.messag="";
		$scope.chatdetails[1].time=$scope.msgtym.toLocaleTimeString();
        timecal($scope.msgtym,1);
    };


});
