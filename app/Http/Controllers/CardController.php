<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Card;
use Illuminate\Support\Facades\Validator;

class CardController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index($id)
    {
        $cards = Card::where('usuario_c', $id)->get();
        return Inertia::render('Cards/Index', ['cards' => $cards]);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Cards/Create');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'nombre_c' => ['required'],
            'numero_c' => ['required'],
            'vencimiento_c' => ['required'],
            'cvv_c' => ['required'],
            'usuario_c' => ['required'],
        ])->validate();

        Card::create($request->all());

        return redirect()->route('products.index');
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Card $card)
    {
        return Inertia::render('Cards/Edit', [
            'card' => $card
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
            'nombre_c' => ['required'],
            'numero_c' => ['required'],
            'vencimiento_c' => ['required'],
            'cvv_c' => ['required'],
        ])->validate();

        Card::find($id)->update($request->all());
        return redirect()->route('cards.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Card::find($id)->delete();
        return redirect()->route('cards.index');
    }
}
