import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const { post } = usePage().props;
    const { data, setData, put, errors } = useForm({
        usuario_p: post.usuario_p || "",
        correo_p: post.correo_p || "",
        comentario_p: post.comentario_p || "",
        producto_p: post.producto_p || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Post</h2>}
        >
            <Head title="Cards" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("posts.index") }
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Usuario</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="usuario_P"
                                            name="usuario_p"
                                            value={props.auth.user.name}
                                            onChange={(e) =>
                                                setData("usuario_p", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.usuario_p}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Correo</label>
                                        <input
                                            type="text"
                                            className="w-full rounded"
                                            label="correo_p"
                                            name="correo_p"
                                            errors={errors.correo_p}
                                            value={data.correo_p}
                                            onChange={(e) =>
                                                setData("correo_p", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.correo_p}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Comentario</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="comentario_p"
                                            name="comentario_p"
                                            errors={errors.comentario_p}
                                            value={data.comentario_p}
                                            onChange={(e) =>
                                                setData("comentario_p", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.comentario_p}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Producto</label>
                                        <input
                                            type="text"
                                            className="w-full rounded"
                                            label="producto_p"
                                            name="producto_p"
                                            errors={errors.producto_p}
                                            value={data.producto_p}
                                            onChange={(e) =>
                                                setData("producto_p", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.producto_p}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
