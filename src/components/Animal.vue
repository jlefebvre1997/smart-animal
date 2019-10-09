<template>
  <div class="card text-center">
    <div class="card-header">L'animal du jour</div>
    <div class="card-body">
      <h2 class="card-title">Le chien</h2>
      <img :src="animal" class="card-img-top" alt="img chien" style="width:20%" />
      <p class="card-text">
        Le Chien (Canis lupus familiaris) est la sous-espèce domestique de Canis lupus, un mammifère de la famille des Canidés (Canidae), laquelle comprend également le Loup gris et le dingo, chien domestique retourné à l'état sauvage.
        Le Loup est la première espèce animale à avoir été domestiquée par l'Homme pour l'usage de la chasse dans une société humaine paléolithique qui ne maîtrise alors ni l'agriculture ni l'élevage. La lignée du chien s'est différenciée génétiquement de celle du Loup gris il y a environ 100 000 ans1 et les plus anciens restes confirmés de canidé différencié de la lignée du Loup sont vieux, selon les sources, de 33 000 ans ou de 12 000 ans, donc antérieurs d'au moins douze mille ans à ceux de toute autre espèce domestique connue. Depuis la Préhistoire, le chien a accompagné l'être humain durant toute sa phase de sédentarisation, marquée par l'apparition des premières civilisations agricoles. C'est à ce moment qu'il a acquis la capacité de digérer l'amidon, et que ses fonctions d'auxiliaire d'Homo sapiens se sont étendues. Ces nouvelles fonctions ont entraîné une différenciation accrue de la sous-espèce et l'apparition progressive de races canines identifiables. Le chien est aujourd'hui utilisé à la fois comme animal de travail et comme animal de compagnie. Son instinct de meute, sa domestication précoce et les caractéristiques comportementales qui en découlent lui valent familièrement le surnom de « meilleur ami de l'Homme ».
        Cette place particulière dans la société humaine a conduit à l'élaboration d'une règlementation spécifique. Ainsi, là où les critères de la Fédération cynologique internationale ont une reconnaissance légale, l'appellation chien de race est conditionnée à l'enregistrement du chien dans les livres des origines de son pays de naissance. Selon le pays, des vaccins peuvent être obligatoires et certains types de chien, jugés dangereux, sont soumis à des restrictions. Le chien est généralement soumis aux différentes législations sur les carnivores domestiques. C'est notamment le cas en Europe, où sa circulation est facilitée grâce à l'instauration du passeport européen pour animal de compagnie.
      </p>
    </div>
  </div>
</template>

<script>
import api from "../api";
export default {
  mounted() {
    api.getAnimal();
  },
  computed: {
    animal() {
      return localStorage.animal ? localStorage.animal : [];
    }
  }
};
</script>

<style lang="scss">
.card {
  margin-top: 4%;
}
img {
  margin-bottom: 2%;
}
</style>
