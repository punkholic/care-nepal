<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Disaster;
use Illuminate\Support\Facades\Hash;

class DisasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('disaster');
    }

    public function tableIndex()
    {
        $data = Disaster::select("*")->get();
        return view('disasterView', compact('data'));
    }

    public function disasterApiIndex(){
       return Disaster::select("*")->where('type', '=', '1')->get();
    }
    public function foodApiIndex(){
       return Disaster::select("*")->where('type', '=', '0')->get();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'place' => 'required',
            'longitude' => 'required|numeric',
            'latitude' => 'required|numeric',
            'type' => 'required|numeric',
        ]);
        $storeData = [
            'name' => $request->get('name'),
            'place' => $request->get('place'),
            'longitude' => $request->get('longitude'),
            'latitude' => $request->get('latitude'),
            'type' => $request->get('type'),
        ];
        Disaster::insert($storeData);
        $inserted = true;
        return view('disaster', compact('inserted'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Disaster::where('id', $id)->delete();
        $data = Disaster::select("*")->get();
        $data->deleted = true;
        return view('disasterView', compact('data'));
    }
}
