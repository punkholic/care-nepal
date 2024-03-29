<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Document</title>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" id="bootstrap-css" rel="stylesheet">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js">
	</script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
	</script><!--==== Include the above in your HEAD tag ========-->

	<style>
        .register {
            background: -webkit-linear-gradient(left, #3931af, #00c6ff);
            margin-top: 3%;
            padding: 3%;
        }
        .register-left {
            text-align: center;
            color: #fff;
            margin-top: 4%;
        }
        .register-left input {
            border: none;
            border-radius: 1.5rem;
            padding: 2%;
            width: 60%;
            background: #f8f9fa;
            font-weight: bold;
            color: #383d41;
            margin-top: 30%;
            margin-bottom: 3%;
            cursor: pointer;
        }
        .register-right {
            background: #f8f9fa;
            border-top-left-radius: 10% 50%;
            border-bottom-left-radius: 10% 50%;
        }
        .register-left img {
            margin-top: 15%;
            margin-bottom: 5%;
            width: 25%;
            -webkit-animation: mover 2s infinite alternate;
            animation: mover 1s infinite alternate;
        }
        @-webkit-keyframes mover {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(-20px);
            }
        }
        @keyframes mover {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(-20px);
            }
        }
        .register-left p {
            font-weight: lighter;
            padding: 12%;
            margin-top: -9%;
        }
        .register .register-form {
            padding: 10%;
            margin-top: 10%;
        }
        .btnRegister {
            float: right;
            margin-top: 10%;
            border: none;
            border-radius: 1.5rem;
            padding: 2%;
            background: #0062cc;
            color: #fff;
            font-weight: 600;
            width: 50%;
            cursor: pointer;
        }
        .register .nav-tabs {
            margin-top: 3%;
            border: none;
            background: #0062cc;
            border-radius: 1.5rem;
            width: 28%;
            float: right;
        }
        .register .nav-tabs .nav-link {
            padding: 2%;
            height: 34px;
            font-weight: 600;
            color: #fff;
            border-top-right-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
        }
        .register .nav-tabs .nav-link:hover {
            border: none;
        }
        .register .nav-tabs .nav-link.active {
            width: 100px;
            color: #0062cc;
            border: 2px solid #0062cc;
            border-top-left-radius: 1.5rem;
            border-bottom-left-radius: 1.5rem;
        }
        .register-heading {
            text-align: center;
            margin-top: 8%;
            margin-bottom: -15%;
            color: #495057;
        }
    </style>
</head>
<body>
@if(isset($inserted) && !is_null($inserted))
  <script>
    alert('Inserted')
  </script>
@endif
	<div class="container register">
		<div class="row">
			<div class="col-md-3 register-left">
				<img alt="" src="https://image.ibb.co/n7oTvU/logo_white.png">
				<h3>Welcome</h3>
				<p>Enter new Disaster</p>
			</div>
			

            <div class="col-md-9 register-right">
				<div class="tab-content" id="myTabContent">
					<div aria-labelledby="home-tab" class="tab-pane fade show active" id="home" role="tabpanel">
						<h3 class="register-heading">Add new Disaster/Food & Shelter</h3>
                        <form method="POST">
                            @csrf
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input class="form-control" name="name" placeholder="Name" type="text" value="">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" name="place" placeholder="Place" type="text" value="">
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control" name="type" type="number" >
                                        <option value="asd">Select Type</option>
                                        <option value="0">Food Distribution</option>
                                        <option value="1">Disaster</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input class="form-control" name="latitude" placeholder="Latitude" type="text" value="">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" name="longitude" placeholder="Longitude" type="text" value="">
                                    </div>
                                <input class="btnRegister" type="submit" value="Insert">
                                </div>
                            </div>
                        </form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>