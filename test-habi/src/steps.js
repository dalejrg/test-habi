module.exports = {
  stepsData: () => {
    return {
      steps: [
        {
          step: 0,
          path: "/",
          component: "Main",
          description: "Solicita una oferta gratis ingresando, tus datos de contacto, la dirección y las características del inmueble. Uno de nuestros expertos te hará una oferta.",
          linkTo: "full-name",
        },

        {
          step: 1,
          path: "/full-name",
          component: "FullName",
          description: "Nombre Completo del propietario",
          linkTo: "email",
        },

        {
          step: 2,
          path: "/email",
          component: "Email",
          description: "Correo electrónico del propietario",
          linkTo: "address-property",
        },

        {
          step: 3,
          path: "/address-property",
          component: "AddressProperty",
          description: "Dirección del inmueble",
          linkTo: "floor-property",
        },

        {
          step: 4,
          path: "/floor-property",
          component: "FloorProperty",
          description: "Número de piso del inmueble",
          linkTo: "social-zones",
        },

        {
          step: 5,
          path: "/social-zones",
          component: "SocialZones",
          description: "Zonas sociales del inmueble",
          linkTo: "summary-end",
        },

        {
          step: 6,
          path: "/summary-end",
          component: "SummaryEnd",
          description: "Resumen de los datos ingresados",
          linkTo: "",
        },
      ],
    };
  },
};
