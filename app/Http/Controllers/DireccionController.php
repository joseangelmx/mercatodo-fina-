<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Direccion;
use Illuminate\Support\Facades\Validator;

class DireccionController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {
        $direcciones = Direccion::all();
        return Inertia::render('Direcciones/Index', ['direcciones' => $direcciones]);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Direcciones/Create');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'calle' => ['required'],
            'numero' => ['required'],
            'colonia' => ['required'],
            'cp' => ['required'],
            'ciudad' => ['required'],
            'estado' => ['required'],
            'usuario_d' => ['required'],
        ])->validate();

        Direccion::create($request->all());

        return redirect()->route('direcciones.index');
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit($products)
    {
        $productos=Direccion::find($products);
        return Inertia::render('Direcciones/Edit', [
            'direcciones' => $productos
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'calle' => ['required'],
            'numero' => ['required'],
            'colonia' => ['required'],
            'cp' => ['required'],
            'ciudad' => ['required'],
            'estado' => ['required'],
            'usuario_d' => ['required'],
        ])->validate();

        Direccion::find($id)->update($request->all());
        return redirect()->route('products.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Direccion::find($id)->delete();
        return redirect()->route('direcciones.index');
    }
    public function mostrar($id){
        $direcciones = Direccion::where('id',$id)->get();
        return Inertia::render('Direcciones/Index', ['direcciones' => $direcciones]);
    }
}
