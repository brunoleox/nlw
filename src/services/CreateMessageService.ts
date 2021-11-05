import prismaCLient from '../prisma'

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaCLient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    })
    return message
  }
}

export { CreateMessageService }
