function initializeUtilityModule(firebaseConfig) {
  // Inicialização do Firebase
  firebase.initializeApp(firebaseConfig);

  function checkAndUpdateLicense(license, domain, theme, callback) {
    var database = firebase.database();
    var licenseRef = database.ref('licenses/' + license);
    
    licenseRef.once('value').then(function(snapshot) {
      var licenseData = snapshot.val();
      if (!licenseData) {
        callback(false, "Licença não encontrada", null);
        return;
      }

      if (licenseData.domain && licenseData.domain !== domain) {
        callback(false, "Licença em uso em outro domínio", null);
        return;
      }

      if (licenseData.status === "DISPONÍVEL" || licenseData.domain === domain) {
        licenseRef.update({
          domain: domain,
          activatedAt: new Date().toISOString(),
          status: "ONLINE",
          theme: theme
        }).then(function() {
          callback(true, "Licença ativada com sucesso", theme);
        }).catch(function(error) {
          callback(false, "Erro ao atualizar licença", null);
        });
      } else {
        callback(false, "Licença indisponível", null);
      }
    }).catch(function(error) {
      callback(false, "Erro ao verificar licença", null);
    });
  }

  function showDialog() {
    var dialog = document.getElementById('utility-dialog');
    dialog.style.display = 'block';
  }

  function updateThemeUpdateText() {
    const now = new Date();
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const currentMonth = months[now.getMonth()];
    const currentYear = now.getFullYear();
    
    var themeUpdateText = document.getElementById('theme-update-text');
    themeUpdateText.textContent = `Última atualização em ${currentMonth} de ${currentYear}`;
  }

  function acquireLicense() {
    window.open('https://protemasbrasil.carrd.co/', '_blank');
  }

  function toggleAcquireButton() {
    var checkbox = document.getElementById('terms-agreement');
    var button = document.getElementById('acquire-license-btn');
    button.disabled = !checkbox.checked;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var dialog = document.getElementById('utility-dialog');
    var statusMessage = document.getElementById('status-message');
    var detailsMessage = document.getElementById('details-message');
    var themeName = document.getElementById('theme-name');
    var themeUpdateText = document.getElementById('theme-update-text');
    var themeVersion = document.getElementById('theme-version');
    var userLicense = dialog.getAttribute('data-user-license');
    var shopDomain = dialog.getAttribute('data-shop-domain');
    var storageKey = 'systemActivated_' + shopDomain;
    var termsCheckbox = document.getElementById('terms-agreement');
    var acquireLicenseBtn = document.getElementById('acquire-license-btn');

    function getCurrentThemeName() {
      return dialog.getAttribute('data-theme-name');
    }

    var currentThemeName = getCurrentThemeName();

    termsCheckbox.addEventListener('change', toggleAcquireButton);

    checkAndUpdateLicense(userLicense, shopDomain, currentThemeName, function(isValid, message, theme) {
      if (isValid) {
        statusMessage.textContent = "STATUS DO TEMA:";
        statusMessage.style.color = "green";
        detailsMessage.textContent = message;
        themeName.textContent = "Tema: " + (theme || "Não especificado");
        localStorage.setItem(storageKey, 'true');
      } else {
        statusMessage.textContent = "Adicione uma Licença Válida para Ativar os Recursos Premium.";
        statusMessage.style.color = "red";
        detailsMessage.textContent = message;
        detailsMessage.classList.add('license-unavailable');
        themeName.style.display = 'none';
        showDialog();
      }
      updateThemeUpdateText();
    });

    // Atualizar status periodicamente
    setInterval(function() {
      if (userLicense) {
        var updatedThemeName = getCurrentThemeName();
        var licenseRef = firebase.database().ref('licenses/' + userLicense);
        licenseRef.update({
          status: "ONLINE",
          theme: updatedThemeName
        });
      }
    }, 300000); // A cada 5 minutos

    // Atualizar a data a cada minuto
    setInterval(updateThemeUpdateText, 60000);
  });

  // Expor funções que precisam ser chamadas do HTML
  window.acquireLicense = acquireLicense;
  window.toggleAcquireButton = toggleAcquireButton;
}
