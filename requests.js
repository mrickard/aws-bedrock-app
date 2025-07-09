'use strict'

module.exports = {
  'amazon-titan': (message) => ({
    modelId: 'amazon.titan-text-express-v1',
    body: {
      inputText: message,
      textGenerationConfig: {
        maxTokenCount: 512,
        stopSequences: [],
        temperature: 0,
        topP: 1,
      }
    }
  }),
  'amazon-titan-embed': (message) => ({
    modelId: 'amazon.titan-embed-text-v2:0',
    body: {
      inputText: message
    },
  }),
  'claude3': (message) => ({
    region: process.env.AWS_REGION,
    modelId: 'us.anthropic.claude-3-haiku-20240307-v1:0',
    body: {
      'anthropic_version': "bedrock-2023-05-31", 
      'max_tokens': 200,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: message
            }
          ]
        }
      ]
    },
  }),
  'llama3': (message) => ({
    modelId: 'us.meta.llama3-3-70b-instruct-v1:0',
    body: { prompt: message },
  }),
  'nova-micro': (message) => ({
    modelId: 'us.amazon.nova-micro-v1:0',
    body: {
      messages: [
        {
          role: 'user',
          content: [
            {
              text: message
            }
          ]
        }
      ]
    }
  }),
  'amazon-invalid': (message) => ({
    modelId: 'amazon.titan-text-express-v1',
    body: { message },
  }),
  'anthropic-invalid': (message) => ({
    modelId: 'anthropic.claude-v2',
    body: {
      inputText: `\n\nHuman: ${message}\n\nAssistant:`,
      max_tokens_to_sample: 200,
    },
  }),
  'ai21-invalid': (message) => ({
    modelId: 'ai21.j2-ultra-v1',
    body: { inputText: message },
  }),
  'llama3-invalid': (message) => ({
    modelId: 'meta.llama3-8b-instruct-v1:0',
    body: { inputText: message },
  }),
}
