import React from 'react';

const Home = () => {
    return (
        <div className="jumbotron my-5 bg-light text-center">
            <h5 className="py-5">Hola, nuestra mision es mejorar tu salud!</h5>
            <img src="https://bucket2.glanacion.com/anexos/fotos/84/2250684h800.jpg" alt="imagen" className="rounded img-fluid" />
            <p className="my-4 ext-center">
                Nuestra mision es difundir, contribuir y orientar al publico en general sin importar edad ni sexo, sobre una buena alimentacion
                proporcionando conocimiento sobre alimentos saludables, estamos comprometidos en brindar informacion actualizada a la cual se pueda
                acceder desde nustro aplicativo web en cualquier lugar y momento. con el fin de mejorar la calidad de vida de las personas,
                a través de acciones que inciden en la alimentación, nutrición y salud.
            </p>
            <h5><b>1. Coma alimentos variados</b></h5>
            <p>Necesitamos más de 40 nutrientes diferentes y ningún alimento por sí solo puede proporcionarlos todos. El suministro de alimentos que existe hoy en día facilita tomar una amplia variedad de alimentos, tanto comprando alimentos frescos para cocinar como comprando comidas preparadas o comida para llevar. ¡Elija los alimentos siempre de manera equilibrada!</p>
            <h5>2. Base su dieta en alimentos ricos en hidratos de carbono</h5>
            <p>La mayoría de la gente no incorpora suficientes alimentos ricos en hidratos de carbono como el pan, la pasta, el arroz, las papas y otros cereales, considerándolos prohibidos para lograr no engordar. Sin embargo, esto no es correcto, más de la mitad de las calorías de su dieta, es decir el 60 % aproximadamente, deben venir de estos alimentos. Lo ideal es aumentar la ingesta de fibra con el aporte de pan integral, la pasta integrales y otros cereales.</p>
        </div>
    )
}

export default Home;