# Typefully Action
This GitHub Action allows you to post content to your social media accounts using the [Typefully API](https://typefully.com/).
 
## Usage
In your Github Actions workflow, add the following YAML code to utilize the action:
```
- name: Typefully
  uses: riccardolinares/typefully@v0.0.1
  with:
    api-key: ${{ secrets.API_KEY }}
    content: 'Hello, world!'
    threadify: true
    share: true
    schedule-date: '2022-01-01T00:00:00Z'
```

## Inputs
The action requires the following inputs:
- `api-key`: Required. The API key for your Typefully account.
- `content`: Required. The content you want to post to your social media accounts.
- `threadify`: Content will be automatically split into multiple tweets. Default is false.
- `share`: If true, returned payload will include a share_url. Default is true.
- `schedule-date`: Can either be an ISO formatted date (e.g.:2022-06-13T11:13:31.662Z) or next-free-slot. Default is next-free-slot.

## Outputs
The output of the action is a response from Typefully API. You can access the response by logging the output of the action.
```
${{ steps.typefully.outputs.text}}
```

## Quick start
1. Create a new Github repository or navigate to an existing one.
2. Go to the "Actions" tab and click on "Set up a workflow yourself".
3. Copy and paste the code from the example folder into the workflow file.
4. Go to the "Settings" tab and click on "Secrets".
5. Add a new secret named `API_KEY` with your OpenAI API key.
6. Commit the changes to your repository.

## Limitations
The action is limited by the usage limits of your Typefully API key.

## Support
If you have any questions or need help with this Github Action, please open an issue in the repository.

## Contributing
If you find any bugs or have suggestions for improvements, feel free to open an issue or create a pull request.
