import React from 'react';
import { Link } from 'react-router';

export interface Column<T> {
    encabezado: string;
    atributo: keyof T;
    render?: (item: T) => React.ReactNode;
}

interface Props<T> {
    data: T[];
    columns: Column<T>[];
    idField?: keyof T;
}

export default function Table<T>({ data, columns, idField ='id' as keyof T }: Props<T>) {
    return (
        <div className="overflow-x-auto">
            <table className={"w-full border-collapse border border-gray-300"}>
                <thead className="bg-secondary">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="border p-2 text-left font-black text-primary">
                                {col.encabezado}
                            </th>
                        ))}
                        <th className="border p-2 text-left font-black text-primary">Ver más</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="border p-2">
                                    {col.render
                                        ? col.render(item)
                                        : item[col.atributo] !== undefined && item[col.atributo] !== null
                                            ? String(item[col.atributo])
                                            : "-"}
                                </td>
                            ))}
                            <td className="border p-2">
                                <Link to={`/bus/${item[idField]}`} className="text-blue-600 hover:underline">
                                    Detalle
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}