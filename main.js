(function() {
  return {
    events: {
      'app.activated': 'onAppActivated'
    },

    onAppActivated: function() {
      var client = this.client;
      client.get('ticket.tags').then(function(data) {
        var tags = data['ticket.tags'];
        var sentiment = 'Neutral';

        if (tags.includes('angry_customer') || tags.includes('unhappy')) {
          sentiment = 'Unhappy';
        } else if (tags.includes('happy_customer') || tags.includes('satisfied')) {
          sentiment = 'Happy';
        }

        client.invoke('resize', { width: '100%', height: '120px' });
        document.getElementById('sentiment').innerText = `Sentiment: ${sentiment}`;
      });
    }
  };
})();
