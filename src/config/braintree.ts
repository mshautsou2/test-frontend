import braintree from 'braintree-web'
const braintreeWebClient: any = braintree.client;
const hostedFields: any = braintree.hostedFields;


export const AUTHORIZATION = `eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUyTWpFd09EVTFOeklzSW1wMGFTSTZJbVUzWmpWbU1EWm1MVFU0TnpBdE5EVm1OQzA1WkdRMUxUVTBNalJpWXpjME1UY3dNaUlzSW5OMVlpSTZJbmN6TmpNMGFIcG5hekkxTm0wM1oyTWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pZHpNMk16Um9lbWRyTWpVMmJUZG5ZeUlzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPbVpoYkhObGZTd2ljbWxuYUhSeklqcGJJbTFoYm1GblpWOTJZWFZzZENKZExDSnpZMjl3WlNJNld5SkNjbUZwYm5SeVpXVTZWbUYxYkhRaVhTd2liM0IwYVc5dWN5STZlMzE5LjFGMUJMMFhYRFN5bzRSdjVfUjRfSHU1dW5uampfODZEbG1wMXBvZjhXeHoyTVowWVk0WGVDdzdXZnhKT2pud3dQMTRmTDdleXNuYjVaX3Z1UlJhUUJBIiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3czNjM0aHpnazI1Nm03Z2MvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4IiwiZmVhdHVyZXMiOlsidG9rZW5pemVfY3JlZGl0X2NhcmRzIl19LCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvdzM2MzRoemdrMjU2bTdnYy9jbGllbnRfYXBpIiwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwibWVyY2hhbnRJZCI6InczNjM0aHpnazI1Nm03Z2MiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsInZlbm1vIjoib2ZmIiwiY2hhbGxlbmdlcyI6W10sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL29yaWdpbi1hbmFseXRpY3Mtc2FuZC5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL3czNjM0aHpnazI1Nm03Z2MifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYWxsb3dIdHRwIjp0cnVlLCJkaXNwbGF5TmFtZSI6IlRlc3QgQ29tcGFueSIsImNsaWVudElkIjoiQVNKWWJXSENuTjFiUlotd2NCeTlkSTgzMG1zWS1aTDBPaENadXJxdHBFQjdmTFlVN2U2V3FYQThNZExlRTJiQkpmSmFza05qbW5QYUR4QnEiLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJtZXJjaGFudEFjY291bnRJZCI6InRlc3Rjb21wYW55IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn19`
export const PAYPAL_CLIENT_ID = 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUyTWpFd09ESXpOeklzSW1wMGFTSTZJbVl6TjJJMllXWXpMVEZrWWpBdE5EUTVNUzFpWmpWaExUUXlZbU00WmpBMk1EWmtOU0lzSW5OMVlpSTZJbmN6TmpNMGFIcG5hekkxTm0wM1oyTWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pZHpNMk16Um9lbWRyTWpVMmJUZG5ZeUlzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPbVpoYkhObGZTd2ljbWxuYUhSeklqcGJJbTFoYm1GblpWOTJZWFZzZENKZExDSnpZMjl3WlNJNld5SkNjbUZwYm5SeVpXVTZWbUYxYkhRaVhTd2liM0IwYVc5dWN5STZlMzE5LkxFWE14SktOb2hocWZfUDdOekdMSGdiT1pEdDJGZ292ZVVJU0JhM254dE5kM1lBTU1za2x3VzRjTmhEZ2dLZUhFeDgxR2FmdG9nSGtQM25FYmdocVdnIiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3czNjM0aHpnazI1Nm03Z2MvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4IiwiZmVhdHVyZXMiOlsidG9rZW5pemVfY3JlZGl0X2NhcmRzIl19LCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvdzM2MzRoemdrMjU2bTdnYy9jbGllbnRfYXBpIiwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwibWVyY2hhbnRJZCI6InczNjM0aHpnazI1Nm03Z2MiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsInZlbm1vIjoib2ZmIiwiY2hhbGxlbmdlcyI6W10sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL29yaWdpbi1hbmFseXRpY3Mtc2FuZC5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL3czNjM0aHpnazI1Nm03Z2MifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYWxsb3dIdHRwIjp0cnVlLCJkaXNwbGF5TmFtZSI6IlRlc3QgQ29tcGFueSIsImNsaWVudElkIjoiQVNKWWJXSENuTjFiUlotd2NCeTlkSTgzMG1zWS1aTDBPaENadXJxdHBFQjdmTFlVN2U2V3FYQThNZExlRTJiQkpmSmFza05qbW5QYUR4QnEiLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJtZXJjaGFudEFjY291bnRJZCI6InRlc3Rjb21wYW55IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn19'

// https://developers.braintreepayments.com/guides/client-sdk/setup/javascript/v3
// https://developers.braintreepayments.com/guides/hosted-fields/setup-and-integration/javascript/v3

export async function createBrainTreeInstance() {
    return new Promise((resolve, reject) => {
    
    
        braintreeWebClient.create({
            authorization: AUTHORIZATION
        }, (err: any, clientInstance: any) => {
            
            
            if (err) {
                console.log(err)
                reject(err)
            }
            console.log(clientInstance)
            resolve(clientInstance)

        
        })
    
    })
}

// https://developers.braintreepayments.com/guides/hosted-fields/setup-and-integration/javascript/v3
export async function createHostedFields(braintreeClient: any, fieldsConfig: { fields: any, styles: any }) {
    return new Promise((resolve, reject) => {
        console.log('=================FIELDS==============', fieldsConfig.fields)
        hostedFields.create({
            client: braintreeClient,
            fields: fieldsConfig.fields,
            styles: fieldsConfig.styles,
        },             function (hostedFieldsErr: any, hostedFieldsInstance: any) {
            if (hostedFieldsErr) {
                console.error(hostedFieldsErr);
                reject(hostedFieldsErr)
                return;
            }
            resolve(hostedFieldsInstance)
      },)
    })
}


export async function createBraintreeVenmoInstance(braintreeClient: any) {

    return new Promise((resolve, reject) => {

        braintree.venmo.create({
            client: braintreeClient,
            // allowNewBrowserTab: false,
            //@ts-ignore
            allowDesktop: true,
        }, (venmoErr, venmoInstance) => {
            if (venmoErr) {
                reject(venmoErr)
                console.error('Error creating Venmo: ', venmoErr);
                return
            }
              // Verify browser support before proceeding.
            if (!venmoInstance.isBrowserSupported()) {
                console.log('Browser does not support Venmo');
                reject('Browser does not support Venmo')
                return;
            }
            if (venmoInstance.hasTokenizationResult()) {
                venmoInstance.tokenize(function (tokenizeErr: any, payload: any) {
                  if (tokenizeErr) {
                    console.error('Venmo error: ', tokenizeErr);
                  } else {
                    console.log('Venmo success', payload)
                    resolve(payload)
                  }
                });
                return;
              } else {

                  resolve(venmoInstance)
              }
        })
    })

}

export async function createBraintreePaypalClient(braintreeClient: any) {
    return new Promise((resolve, reject) => {
        braintree.paypalCheckout.create({
            client: braintreeClient
        }, (paypalCheckoutErr, paypalCheckoutInstance) => {
            if (paypalCheckoutErr)  {
                console.error('Error creating payapl checkout', paypalCheckoutErr)
                reject(paypalCheckoutErr)
            }

            paypalCheckoutInstance.loadPayPalSDK({
                currency: 'USD',
                intent: 'capture',
            }, () => {

                resolve(paypalCheckoutInstance)
            })
        }) 
    })
}