import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { SearchInput, Button } from '@patternfly/react-core';
import { P, H2, Div } from './ProductStyle'


interface ComponentState {
    value: any,
}
class Product extends React.Component<{}, ComponentState>{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.onChange = (value, event) => {
            this.setState({
                value: value
            });
        };
    }

    render() {
        return (
            <>
                <Grid>
                    <GridItem span={6}> 
                        <H2>Product</H2>
                        <p>Make Changes to Product Here</p>
                    </GridItem>
                    <GridItem span={6}>
                        <P>
                        <SearchInput
                            placeholder='Search Reseller Groups'
                            value={this.state.value}
                            onChange={this.onChange}
                            onClear={(evt) => this.onChange('', evt)}
                        />
                        </P>
                        <Div>
                        <Button variant="danger" style={{margin:'10px', borderRadius:'5px'}}>Delete</Button>
                        <Button variant="primary" style={{borderRadius:'5px'}}>Add Product</Button>
                        </Div>
                    </GridItem>
                </Grid>
            </>
        );
    }
}

export default Product;

