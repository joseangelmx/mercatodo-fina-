<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Card;
use App\Models\Direccion;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {
        $products = Product::where('usuario',0)->get();
        return Inertia::render('Products/Index', compact('products'));
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Products/Create');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'nombre' => ['required'],
            'descripcion' => ['required'],
            'precio' => ['required'],
            'usuario' => ['required'],
            'estado' => ['required'],
            'tarjeta' => ['required'],
            'address' => ['required'],
            'reporte' => ['required'],
            'eventa' => ['required'],
            'usuariov' => ['required'],
            'file' => ['required'],
        ])->validate();

        $fileName = time().'.'.$request->file->extension();
        $request->file->move(public_path('uploads'), $fileName);

        Product::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'precio' => $request->precio,
            'usuario' => $request->usuario,
            'estado' => $request->estado,
            'tarjeta'=> $request->tarjeta,
            'address'=> $request->address,
            'reporte' => $request->reporte,
            'eventa'=> $request->eventa,
            'usuariov' => $request->usuariov,
            'imagen' => $fileName,
        ]);

        return redirect()->route('products.index');
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Product $products)
    {
        return Inertia::render('Products/Edit', [
            'products' => $products
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
            'usuario' => ['required'],
            'estado' => ['required'],
            'tarjeta' => ['required'],
            'address' => ['required'],
            'eventa' => ['required'],

        ])->validate();
        Product::find($id)->update([
            'usuario' => $request->usuario,
            'estado' => $request->estado,
            'tarjeta'=> $request->tarjeta,
            'address'=> $request->address,
            'eventa'=> $request->eventa,
        ]);
        $tarjeta=$request->tarjeta;
        $address=$request->address;
        return redirect("/comprobante"."/".$id."/".$tarjeta."/".$address);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Product::find($id)->delete();
        return redirect()->route('products.index');
    }
    public function mostrar ($post)
    {
       $products= Product::where('usuariov',$post)->get();
        return Inertia::render('Products/Mostrar', [
            'products'=>$products
        ]);
    }

    public function compras ($post)
    {
       $products= Product::where('usuario',$post)->get();
        return Inertia::render('Products/Compras', [
            'products'=>$products
        ]);
    }
    public function ventas ($product,$id){
       $product = Product::where('id',$product)->get();
       $cards= Card::where('usuario_c',$id)->get();
       $direcciones= Direccion::where('usuario_d',$id)->get();
       return Inertia::render('Products/Ventas', [
        'product'=>$product, 'cards'=>$cards, 'direcciones'=>$direcciones
    ]);
    }
    public function comprobante ($products,$cards,$address){
        $product = Product::where('id',$products)->get();
        $card = Card::where('id',$cards)->get();
        $direccion = Direccion::where('id',$address)->get();
        return Inertia::render('Products/Confirmacion', [
            'product'=>$product, 'card'=>$card, 'direccion'=>$direccion
        ]);
    }
}
