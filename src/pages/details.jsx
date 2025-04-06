import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import { usePokemonDetail } from '../services/pockemonapi';
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

const TYPE_COLORS = {
    normal: 'bg-rose-100 text-rose-800',
    fire: 'bg-orange-100 text-orange-800',
    water: 'bg-sky-100 text-sky-800',
    electric: 'bg-yellow-100 text-yellow-800',
    grass: 'bg-green-100 text-green-800',
    ice: 'bg-cyan-100 text-cyan-800',
    fighting: 'bg-red-100 text-red-800',
    poison: 'bg-purple-100 text-purple-800',
    ground: 'bg-yellow-200 text-yellow-900',
    flying: 'bg-indigo-100 text-indigo-800',
    psychic: 'bg-pink-100 text-pink-800',
    bug: 'bg-lime-100 text-lime-800',
    rock: 'bg-stone-200 text-stone-900',
    ghost: 'bg-violet-100 text-violet-800',
    dragon: 'bg-purple-200 text-purple-900',
    dark: 'bg-gray-400 text-gray-900',
    steel: 'bg-zinc-200 text-zinc-900',
    fairy: 'bg-pink-200 text-pink-900',
};

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);

    if (!pokemonData) {
        return <Loading />;
    }

    const primaryType = pokemonData.types[0]?.type.name || 'normal';
    const colorClasses = TYPE_COLORS[primaryType] || TYPE_COLORS.normal;

    return (
        <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-white py-10 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
                {/* Card Info */}
                <div className="col-span-1 bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center">
                    <img
                        src={pokemonData.sprites.front_default || '/pokeball.png'}
                        alt={pokemonData.name}
                        className="w-48 h-48 object-contain mb-4"
                        onError={(e) => e.target.src = '/pokeball.png'}
                    />
                    <h1 className="text-2xl font-bold capitalize text-gray-800 mb-2">{pokemonData.name}</h1>
                    <span className="text-sm text-gray-500 mb-4">#{pokemonData.id.toString().padStart(3, '0')}</span>
                    <div className="flex gap-2 mb-6">
                        {pokemonData.types.map((type) => (
                            <span
                                key={type.type.name}
                                className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${TYPE_COLORS[type.type.name]}`}
                            >
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                    <PokemonAddCollection
                        Pokecod={pokeid}
                        imgSprite={pokemonData.sprites.front_default}
                        name={pokemonData.name}
                        url=""
                        className="w-full"
                    />
                </div>

                {/* General Info + Abilities */}
                <div className="col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Información General</h2>
                        <div className="grid grid-cols-2 gap-6 text-gray-700">
                            <div>
                                <h3 className="text-sm font-semibold">Altura</h3>
                                <p>{(pokemonData.height / 10).toFixed(1)} m</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold">Peso</h3>
                                <p>{(pokemonData.weight / 10).toFixed(1)} kg</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Habilidades</h2>
                        <div className="flex flex-wrap gap-2">
                            {pokemonData.abilities.map((ab) => (
                                <span
                                    key={ab.ability.name}
                                    className="px-3 py-1 bg-gray-100 text-sm rounded-full capitalize"
                                >
                                    {ab.ability.name.replace('-', ' ')} {ab.is_hidden && '(oculta)'}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats y Movimientos */}
            <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Estadísticas</h2>
                    <ul className="space-y-3">
                        {pokemonData.stats.map((stat) => (
                            <li key={stat.stat.name} className="flex items-center gap-2">
                                <span className="w-32 capitalize text-sm font-medium text-gray-600">
                                    {stat.stat.name.replace('-', ' ')}:
                                </span>
                                <div className="flex-1 bg-gray-200 rounded-full h-3">
                                    <div
                                        className={`h-3 rounded-full ${colorClasses}`}
                                        style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
                                    />
                                </div>
                                <span className="w-10 text-right text-sm font-semibold text-gray-700">
                                    {stat.base_stat}
                                </span>
                            </li>
                        ))}
                        <li className="flex items-center gap-2 pt-2 mt-2 border-t border-gray-200">
                            <span className="w-32 capitalize text-sm font-semibold text-gray-700">Total:</span>
                            <span className="font-semibold text-gray-800">
                                {pokemonData.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-3xl shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Movimientos</h2>
                    <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
                        {pokemonData.moves.map((mv) => (
                            <span
                                key={mv.move.name}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize"
                            >
                                {mv.move.name.replace('-', ' ')}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};