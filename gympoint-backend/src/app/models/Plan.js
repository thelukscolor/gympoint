import { Model, Sequelize } from 'sequelize';

class Plan extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                duration: Sequelize.STRING,
                price: Sequelize.DECIMAL(10, 2),
                total: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return this.duration * this.price;
                    },
                },
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Plan;
