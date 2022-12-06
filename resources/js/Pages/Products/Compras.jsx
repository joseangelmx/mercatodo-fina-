import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { products } = usePage().props

    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("products.destroy", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("products.index") }
                                >
                                    Ir a productos
                                </Link>p
                            </div>

                            <div class="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
  <ul class="flex flex-col divide-y w-full" style={{width:"900px"}}>
  {products.map(({ id, nombre, descripcion, precio, usuario, estado, reporte, usuariov, imagen }) => (

    <li class="flex flex-row">
      <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
        <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <a href="#" class="block relative">
            <img alt="profil" src={'/uploads/'+imagen} class="mx-auto object-cover rounded-full h-10 w-10" />
          </a>
        </div>
        <div class="flex-1 pl-1">
          <div class="font-medium dark:text-white">{nombre}</div>
          <div class="text-gray-600 dark:text-gray-200 text-sm">{descripcion}</div>
          <div class="text-red-600 dark:text-gray-200 text-sm">${precio}</div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="text-gray-600 dark:text-gray-200 text-xs">{estado}</div>
          <button class="w-10 text-right flex justify-end">
            <svg width="20" fill="currentColor" height="20" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
    ))}
  </ul>

  {products.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                               <h1> No se han encontrado compras.
                                               <br/>
                                               ¡Empieza a comprar!
                                                    </h1>



                                                <br/>
                                                <br/>
                                                <center>
                                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("products.index") }
                                >
                                    Ir a Productos
                                </Link>
                                </center>
                                            </td>
                                        </tr>
                                    )}
</div>
<div class="bg-white min-h-screen flex justify-center items-center">

    </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Nombre</th>
                                        <th className="px-4 py-2">Descripcion</th>
                                        <th className="px-4 py-2">Precio</th>
                                        <th className="px-4 py-2">Usuario</th>
                                        <th className="px-4 py-2">Estado</th>
                                        <th className="px-4 py-2">Reporte</th>
                                        <th className="px-4 py-2">Vendedor</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(({ id, nombre, descripcion, precio, usuario, estado, reporte, usuariov, imagen }) => (

                                   <tr>
                                            <td className="border px-4 py-2">{ id }</td>
                                            <td className="border px-4 py-2">{ nombre }</td>
                                            <td className="border px-4 py-2">{ descripcion }</td>
                                            <td className="border px-4 py-2">{ precio }</td>
                                            <td className="border px-4 py-2">{ usuario }</td>
                                            <td className="border px-4 py-2">{ estado }</td>
                                            <td className="border px-4 py-2">{ reporte }</td>
                                            <td className="border px-4 py-2">{ usuariov }</td>
                                            <td className="border px-4 py-2">
                                                <img src={'/uploads/'+imagen} width="50px" />
                                            </td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("products.edit", id)}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    {products.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
