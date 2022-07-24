<script>
  import profileImg from '$lib/assets/profile.png'
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <script>
    ;(function (w, d, s, l, i) {
      w[l] = w[l] || []
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : ''
      j.async = true
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
      f.parentNode.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', 'GTM-NW5PX94')
  </script>
  <!-- End Google Tag Manager -->
  <title>개발하는 다현</title>
  <meta name="description" content="Backend Engineer 김다현입니다." />
</svelte:head>

<div class="profile-wrapper">
  <div class="profile-box">
    <img class="profile" src={profileImg} alt={'프로필 사진'} />
  </div>
  <div class="title-desc">
    <h1 class="title">김다현, <small>doomdoom</small></h1>
    <p class="desc">
      📍 백엔드 개발자에요. Nest.js를 주로 다룹니다. <br />
      📍 음악을 좋아하고 노래를 즐겨불러요. <br />
      📍 술을 좋아해요. 프로혼술러!<br />
    </p>
  </div>
</div>

<h2 class="section-title">좋아하는 음악 🎵</h2>
<ul class="musics">
  <li>
    <h3>
      <a href="https://youtu.be/WLgYIbDY9ds?t=671">양인모, Histoire du Tango: III. Nightclub 1960</a
      >
    </h3>
    <p>
      그저 그랬던 곡이였는데, 인천에서 열린 양인모님의 리사이틀에 갔다가 반하게 되었던 곡이에요.
      정열적인 음색들과 팽팽한 현의 소리가 매력적인 곡입니다.
    </p>
  </li>
  <li>
    <h3>
      <a href="https://www.youtube.com/watch?v=g4uWEaZqP1w">어반자카파, Get</a>
    </h3>
    <p>남 눈치 많이보는 제게 힘이 되어주는 노래에요. 가끔 가사 들으면서 용기를 얻는 노래!</p>
  </li>
</ul>

<h2 class="section-title">좋아하는 술 🥃</h2>
<ul class="drinks">
  <li>
    <h3>
      <a href="https://www.ardbeg.com/en-int/whisky/ultimate-range/ten-years-old">Ardbeq Ten</a>
    </h3>
    <p>
      개인적으로 가다랑어포 향과 비슷하다고 느껴지는 피트향이 진한 위스키에요. 제가 좋아하는
      바이올리니스트 양인모님의 연주를 들으면 이 술이 종종 떠오르곤 하더라구요.
    </p>
  </li>
  <li>
    <h3>
      <a href="https://www.calvados-boulard.com/en/calvados/boulard-x-o/">Calvados Boulard XO</a>
    </h3>
    <p>
      연희동의 <a href="https://www.instagram.com/chaegbar/">'책바'</a>라는 바에서 처음 마셔본
      술이에요. 은은한 사과향이 무척 인상깊었던 술이랍니다. 늘 자극적이고 강렬한 무언가를 좋아하는
      제게 은근한 맛의 매력을 알게 해준 술이에요.
    </p>
  </li>
</ul>

<style lang="postcss">
  .profile-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 2.5em 0;
    gap: 2em;
  }

  .title {
    margin: 0;
  }

  .desc {
    margin-top: 0.25em;
    margin-bottom: 0;
    line-height: 2.5em;
  }

  .profile-box {
    overflow: hidden;
    width: 14em;
    height: 14em;
    border-radius: 100%;
    box-shadow: 0 20px 13px rgb(0 0 0 / 3%);
  }

  .profile {
    width: 100%;
  }

  .section-title {
    margin-bottom: 0.2em;
  }

  .drinks,
  .musics {
    margin-bottom: 3em;

    h3 {
      margin: 0 0 0.2em;
    }

    p {
      margin-top: 0;
    }
  }
</style>
