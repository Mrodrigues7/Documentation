---
id: application-workspace
title: " "
sidebar_label: Workspace
---


## refresh

#### Description

This method can be used inside any workspace. Refresh a workspace

#### Method(s)

```javascript
1   declare function refresh(): void;
```



#### Basic Usage

```javascript
SW.Application.Workspace.refresh();
```


## setFilter

#### Description

This method can be used inside any workspace. Create a new assignment

#### Method(s)

```javascript
1  declare function setFilter(filter: string, value: any, 
2   params: {senderId?: string} = {senderId: ""}): void;
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>filter</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>value</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>String</td>
            <td>false</td>
            <td>""</td>
            <td>Sender's id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Workspace.setFilter(filter, 20);
```

## setFilters

#### Description

This method can be used inside any workspace. Set multiple filters

#### Method(s)

```javascript
1  declare function setFilters(filtersWithValues: DashboardFilter[], 
2   params: {senderId?: string} = {senderId: ""}): void;
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>filtersWithValues</code></td>
            <td>DashboardFilter</td>
            <td>true</td>
            <td></td>
            <td>Array of filters</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>String</td>
            <td>false</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Workspace.setFilters([filters], "98226093-09B6-4E12-B9C6-2AEED2963C31");
```
## setPanels

#### Description

This method can be used inside any workspace. Set workspace's panels
#### Method(s)

```javascript
1  declare function setPanels(items: IUpdatedLayoutItems, 
2   options: ILayoutEditOptions): void;
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>items</code></td>
            <td>IUpdatedLayoutItems</td>
            <td>true</td>
            <td></td>
            <td>Layout items to be updated. Pass the name or id of the item</td>
        </tr>
        <tr className="selected">
            <td><code>options</code></td>
            <td>ILayoutEditOptions</td>
            <td>true</td>
            <td></td>
            <td>A boolean to set save option to true or false</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Workspace.setPanels("EF6C7CB6-9798-4A44-B33D-284B38F54931", true);
```