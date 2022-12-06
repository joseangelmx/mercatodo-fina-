<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre_c', 'numero_c','vencimiento_c', 'cvv_c','usuario_c'
    ];
}
