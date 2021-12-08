<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $blood_data= ["A-","A+","B-","B+", "AB+", "AB-", "O+", "O-"];
        $data = User::select('mobile_number', 'blood_type','blood_id as blood_group','firstname','lastname','location','gender')
        ->whereNotNull('blood_id')->get();
        foreach( $data as $value){
            $value->blood_group = $blood_data[$value->blood_group];
        }
        return $data;
    }
    
    public function login(Request $request){
        $mustHave = ['email', 'password'];
        foreach($mustHave as $value){
            if($request->get($value) == null){
                return array('status' => 'error', 'message' => 'something went wrong');
            }
        }
        $user = User::select('password')->where('email', '=', $request->get('email'))->first();
        if(is_null($user)){
            return array('status' => 'error', 'message' => 'something went wrong');
        }
        if (Hash::check($request->get('password'), $user->password)) {
            return array('status' => 'success');
        }
        return array('status' => 'error', 'message' => 'something went wrong');
    }

    public function getPlasma($id){
        $data = User::select('mobile_number', 'blood_type','blood_id as blood_group','firstname','lastname','location','gender')
        ->where('blood_type', '=', '1')->get();
        return $data;
    }
    
    public function getBlood(){
        $data = User::select('mobile_number', 'blood_type','blood_id as blood_group','firstname','lastname','location','gender')
        ->where('blood_type', '=', '0')->get();
        return $data;
    }

    public function getUser($id){
        if(is_numeric($id)){
            $blood_data= ["A-","A+","B-","B+", "AB+", "AB-", "O+", "O-"];
            $data = User::select('mobile_number','blood_id as blood_group', 'blood_type' ,'firstname','lastname','location','gender')
            ->where('id','=',$id)->first();
            if(empty($data)){
                return ["Success" => false]; 
            }
            if($data->blood_group != null){

                $data->blood_group = $blood_data[$data->blood_group];
            }
            return $data;
        }
        return ["Success" => false]; 
        
    }
    public function store(Request $request){
        $optionalField = ['blood_id', 'mobile_number', 'location', 'blood_type'];
        $mustHave = ['firstname', 'lastname', 'email', 'password', 'gender'];
        if($request->get('blood_id') != null){
            $mustHave = array_merge($mustHave, $optionalField);
        }
        $toValidate = [];
        for($i = 0; $i < count($mustHave); $i++){
            $toValidate[$mustHave[$i]] = ['required'];
            $toStore[$mustHave[$i]] = $request->get($mustHave[$i]);
        }
        $toStore = [];
        for($i = 0; $i < count($mustHave); $i++){
            $toStore[$mustHave[$i]] = $request->get($mustHave[$i]);
        }
        $toStore['password'] = Hash::make($toStore['password']);

        // $request->validate($toValidate);
        User::insert($toStore);
        return ["Success" => true]; 
    }
}
